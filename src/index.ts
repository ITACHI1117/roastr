import { ROAST_COLLECTIONS } from "./roast/roast";
import { STATUS_CODE_ROASTS } from "./roast/statusCodeRoast";

type Character = "default" | "rick" | "morty";
type StatusCode = 400 | 401 | 403 | 404 | 500 | 502 | 503; // Add this type

let currentCharacter: Character = "rick";
const originalConsoleError = console.error;
const originalFetch = globalThis.fetch;

export function initRoastr(character: Character = "default") {
  currentCharacter = character;

  // Override console.error
  console.error = (...args: any[]) => {
    const roast = getRoast(args[0], currentCharacter);
    originalConsoleError(`[Rostr][${currentCharacter}] ${roast}`, ...args);
  };

  // Override fetch
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    try {
      const response = await originalFetch(input, init);
      if (!response.ok) {
        // ✅ Fixed: Pass response.status (number) instead of string
        const roast = getNetworkErrorRoast(response.status, currentCharacter);
        originalConsoleError(`[Roastr][${currentCharacter}] ${roast}`);
      }
      return response;
    } catch (err) {
      const roast = getRoast("Fetch failed", currentCharacter);
      originalConsoleError(`[Roastr][${currentCharacter}] ${roast}`, err);
      throw err;
    }
  };
}

function getRoast(message: string, character: Character): string {
  const roasts = ROAST_COLLECTIONS[character];
  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

  // For Rick and Morty, sometimes append the actual error message
  if (character === "rick" && Math.random() > 0.7) {
    return `${randomRoast} The error says: "${message}"`;
  } else if (character === "morty" && Math.random() > 0.8) {
    return `${randomRoast} The error is: "${message}"`;
  }
  return randomRoast;
}

// ✅ Fixed: Correct parameter type (number, not string)
function getNetworkErrorRoast(
  statusCode: number,
  character: Character
): string {
  const statusRoasts = STATUS_CODE_ROASTS[character];

  // Check if we have specific roasts for this status code
  if (statusRoasts && statusCode in statusRoasts) {
    const roasts = statusRoasts[statusCode as StatusCode];
    return roasts[Math.floor(Math.random() * roasts.length)];
  }

  // Fallback to generic network error roast
  const fallbackRoasts: Record<Character, string[]> = {
    // ✅ Added proper typing
    rick: [
      `${statusCode}? I've seen better error codes in Jerry's failed diet apps!`,
      `Network error ${statusCode}! This is more broken than our family dynamic!`,
      `${statusCode} error! Even my portal gun has better error handling!`,
    ],
    morty: [
      `Aw jeez, ${statusCode} error! I-I don't know what that means but it sounds bad!`,
      `Oh man, network error ${statusCode}! Should we be worried about this?`,
      `${statusCode}? That's a lot of numbers, Rick! Is that good or bad?`,
    ],
    default: [
      `Network error ${statusCode}! Time to check the docs!`,
      `${statusCode} status code detected! Something's not quite right!`,
      `Error ${statusCode}: The server has spoken, and it's not happy!`,
    ],
  };

  const roasts = fallbackRoasts[character];
  return roasts[Math.floor(Math.random() * roasts.length)];
}
