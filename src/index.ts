import { ROAST_COLLECTIONS } from "./roast/roast";
import { STATUS_CODE_ROASTS } from "./roast/statusCodeRoast";

type Character = "Default" | "Rick" | "Morty";
type StatusCode = 400 | 401 | 403 | 404 | 500 | 502 | 503;

let currentCharacter: Character = "Rick";

// Store original console methods
const originalConsole = {
  log: console.log,
  error: console.error,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
  trace: console.trace,
  table: console.table,
  group: console.group,
  groupCollapsed: console.groupCollapsed,
  groupEnd: console.groupEnd,
  time: console.time,
  timeEnd: console.timeEnd,
  count: console.count,
  assert: console.assert,
};

const originalFetch = globalThis.fetch;

export function initRoastr(character: Character = "Rick") {
  currentCharacter = character;

  // Override ALL console methods
  console.log = (...args: any[]) => {
    const roast = getConsoleRoast("log", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.log(...args);
  };

  console.error = (...args: any[]) => {
    const roast = getConsoleRoast("error", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.error(...args);
  };

  console.warn = (...args: any[]) => {
    const roast = getConsoleRoast("warn", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.warn(...args);
  };

  console.info = (...args: any[]) => {
    const roast = getConsoleRoast("info", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.info(...args);
  };

  console.debug = (...args: any[]) => {
    const roast = getConsoleRoast("debug", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.debug(...args);
  };

  console.trace = (...args: any[]) => {
    const roast = getConsoleRoast("trace", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.trace(...args);
  };

  console.table = (data: any, columns?: string[]) => {
    const roast = getConsoleRoast("table", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.table(data, columns);
  };

  console.group = (...args: any[]) => {
    const roast = getConsoleRoast("group", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.group(...args);
  };

  console.groupCollapsed = (...args: any[]) => {
    const roast = getConsoleRoast("groupCollapsed", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.groupCollapsed(...args);
  };

  console.time = (label?: string) => {
    const roast = getConsoleRoast("time", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.time(label);
  };

  console.timeEnd = (label?: string) => {
    const roast = getConsoleRoast("timeEnd", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.timeEnd(label);
  };

  console.count = (label?: string) => {
    const roast = getConsoleRoast("count", currentCharacter);
    originalConsole.error(`[${currentCharacter}]: ${roast}`);
    originalConsole.count(label);
  };

  console.assert = (condition?: boolean, ...data: any[]) => {
    if (!condition) {
      const roast = getConsoleRoast("assert", currentCharacter);
      originalConsole.error(`[${currentCharacter}]: ${roast}`);
    }
    originalConsole.assert(condition, ...data);
  };

  // Fetch Roast  logic
  // globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  //   try {
  //     const response = await originalFetch(input, init);
  //     if (!response.ok) {
  //       const roast = getNetworkErrorRoast(response.status, currentCharacter);
  //       originalConsole.error(`[${currentCharacter}]: ${roast}`);
  //     }
  //     return response;
  //   } catch (err) {
  //     const roast = getGenericRoast("Fetch failed", currentCharacter);
  //     originalConsole.error(`[${currentCharacter}]: ${roast}`, err);
  //     throw err;
  //   }
  // };
}

// Export function to restore original console (for cleanup)
export function restoreConsole() {
  console.log = originalConsole.log;
  console.error = originalConsole.error;
  console.warn = originalConsole.warn;
  console.info = originalConsole.info;
  console.debug = originalConsole.debug;
  console.trace = originalConsole.trace;
  console.table = originalConsole.table;
  console.group = originalConsole.group;
  console.groupCollapsed = originalConsole.groupCollapsed;
  console.groupEnd = originalConsole.groupEnd;
  console.time = originalConsole.time;
  console.timeEnd = originalConsole.timeEnd;
  console.count = originalConsole.count;
  console.assert = originalConsole.assert;

  // Restore fetch
  globalThis.fetch = originalFetch;
}

function getConsoleRoast(method: string, character: Character): string {
  const consoleRoasts: Record<Character, Record<string, string[]>> = {
    Rick: {
      log: ROAST_COLLECTIONS.rickLog,
      error: ROAST_COLLECTIONS.rickError,
      warn: ROAST_COLLECTIONS.rickWarn,
      info: ROAST_COLLECTIONS.rickInfo,
      debug: ROAST_COLLECTIONS.rickDebug,
      trace: ROAST_COLLECTIONS.rickTrace,
      table: ROAST_COLLECTIONS.rickTable,
      group: ROAST_COLLECTIONS.rickGroup,
      time: ROAST_COLLECTIONS.rickTime,
      timeEnd: ROAST_COLLECTIONS.rickTimeEnd,
      count: ROAST_COLLECTIONS.rickCount,
      assert: ROAST_COLLECTIONS.rickAssert,
    },
    Morty: {
      log: ROAST_COLLECTIONS.mortyLog,
      error: ROAST_COLLECTIONS.mortyError,
      warn: ROAST_COLLECTIONS.mortyWarn,
      info: ROAST_COLLECTIONS.mortyInfo,
      debug: ROAST_COLLECTIONS.mortyDebug,
      trace: ROAST_COLLECTIONS.mortyTrace,
      table: ROAST_COLLECTIONS.mortyTable,
      group: ROAST_COLLECTIONS.mortyGroup,
      time: ROAST_COLLECTIONS.mortyTime,
      timeEnd: ROAST_COLLECTIONS.mortyTimeEnd,
      count: ROAST_COLLECTIONS.mortyCount,
      assert: ROAST_COLLECTIONS.mortyAssert,
    },

    Default: {
      log: [
        "Another console.log()! Here's your debug output:",
        "Logging to console... Here's what you wanted to see:",
        "console.log() called! Here's your output:",
        "Debug log detected! Here's your information:",
      ],
      error: [
        "Error detected! Here's what went wrong:",
        "An error occurred! Details below:",
        "console.error() called! Here's the error:",
        "Something went wrong! Error details:",
      ],
      warn: [
        "Warning issued! Here's what you should know:",
        "console.warn() called! Warning details:",
        "Warning detected! Please review:",
        "Heads up! Warning message below:",
      ],
      info: [
        "Information provided! Here are the details:",
        "console.info() called! Information below:",
        "Info message! Here's what you need to know:",
        "Additional information available:",
      ],
      debug: [
        "Debug information requested! Details below:",
        "console.debug() called! Debug output:",
        "Debugging in progress! Here's your info:",
        "Debug mode active! Information provided:",
      ],
      trace: [
        "Stack trace requested! Here's the execution path:",
        "console.trace() called! Stack trace below:",
        "Execution trace! Here's how we got here:",
        "Call stack information:",
      ],
      table: [
        "Table format requested! Data presented below:",
        "console.table() called! Formatted data:",
        "Data table generated! Information below:",
        "Structured data presentation:",
      ],
      group: [
        "Log group started! Organizing output:",
        "console.group() called! Grouping messages:",
        "Message grouping initiated:",
        "Organizing log output into groups:",
      ],
      time: [
        "Performance timer started! Measuring execution:",
        "console.time() called! Timer initiated:",
        "Timing measurement began:",
        "Performance monitoring started:",
      ],
      timeEnd: [
        "Performance timer ended! Measurement complete:",
        "console.timeEnd() called! Timer finished:",
        "Timing measurement completed:",
        "Performance monitoring finished:",
      ],
      count: [
        "Counter updated! Tracking occurrences:",
        "console.count() called! Count incremented:",
        "Occurrence counter incremented:",
        "Counting function calls:",
      ],
      assert: [
        "Assertion failed! Condition was not met:",
        "console.assert() failed! Assertion error:",
        "Assert condition failed! Check your logic:",
        "Assertion error detected! Condition not satisfied:",
      ],
    },
  };

  const roasts =
    consoleRoasts[character][method] || consoleRoasts[character]["log"];
  return roasts[Math.floor(Math.random() * roasts.length)];
}

// function getGenericRoast(message: string, character: Character): string {
//   const roasts = ROAST_COLLECTIONS[character];
//   const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];

//   if (character === "rick" && Math.random() > 0.7) {
//     return `${randomRoast} The error says: "${message}"`;
//   } else if (character === "morty" && Math.random() > 0.8) {
//     return `${randomRoast} The error is: "${message}"`;
//   }
//   return randomRoast;
// }

// Network roasting

// function getNetworkErrorRoast(
//   statusCode: number,
//   character: Character
// ): string {
//   const statusRoasts = STATUS_CODE_ROASTS[character];

//   if (statusRoasts && statusCode in statusRoasts) {
//     const roasts = statusRoasts[statusCode as StatusCode];
//     return roasts[Math.floor(Math.random() * roasts.length)];
//   }

//   const fallbackRoasts: Record<Character, string[]> = {
//     rick: [
//       `${statusCode}? I've seen better error codes in Jerry's failed diet apps!`,
//       `Network error ${statusCode}! This is more broken than our family dynamic!`,
//       `${statusCode} error! Even my portal gun has better error handling!`,
//     ],
//     morty: [
//       `Aw jeez, ${statusCode} error! I-I don't know what that means but it sounds bad!`,
//       `Oh man, network error ${statusCode}! Should we be worried about this?`,
//       `${statusCode}? That's a lot of numbers, Rick! Is that good or bad?`,
//     ],
//     default: [
//       `Network error ${statusCode}! Time to check the docs!`,
//       `${statusCode} status code detected! Something's not quite right!`,
//       `Error ${statusCode}: The server has spoken, and it's not happy!`,
//     ],
//   };

//   const roasts = fallbackRoasts[character];
//   return roasts[Math.floor(Math.random() * roasts.length)];
// }
