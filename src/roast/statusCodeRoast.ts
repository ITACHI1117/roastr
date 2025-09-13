// Status code specific roasts for network errors
export const STATUS_CODE_ROASTS = {
  rick: {
    400: [
      "400 Bad Request? More like 400 Bad Programmer! *burp*",
      "Your request is more malformed than Jerry's personality!",
      "Even the Galactic Federation sends better requests than this!",
    ],
    401: [
      "401 Unauthorized? Did you forget your interdimensional passport?",
      "You're more unauthorized than Jerry at a MENSA meeting!",
      "Authentication failed! Even Mr. Meeseeks could figure this out!",
    ],
    403: [
      "403 Forbidden! Looks like you're not invited to this party!",
      "Access denied! You have less clearance than Jerry!",
      "Forbidden? What are you trying to access, the Citadel of Ricks?",
    ],
    404: [
      "404 Not Found! Just like Jerry's purpose in life!",
      "This endpoint is more missing than my emotional connection to this family!",
      "404? I've lost things in dimensions that are easier to find!",
    ],
    500: [
      "500 Internal Server Error! Their server is more broken than my liver!",
      "Server error? Probably running on Windows Vista from dimension C-137!",
      "Internal server error! Even my garage experiments are more stable!",
    ],
    502: [
      "502 Bad Gateway! This gateway is worse than the one to the Cronenberg dimension!",
      "Bad gateway? I've seen better portals made out of cardboard!",
      "502? The only thing worse is Jerry's taste in everything!",
    ],
    503: [
      "503 Service Unavailable! Just like Jerry during any crisis!",
      "Service unavailable? Did they hire Jerry as their system admin?",
      "503? The service is taking longer than my interdimensional cable installation!",
    ],
  },

  morty: {
    400: [
      "Aw jeez, 400 Bad Request! I-I think we messed up the request format!",
      "Oh man, the server doesn't understand what we're asking for!",
      "Jeez Rick, maybe we should double-check our request parameters?",
    ],
    401: [
      "Oh no, 401 Unauthorized! I-I think we forgot to log in or something!",
      "Aw geez, we're not allowed to do this! Are we gonna get in trouble?",
      "401? Oh man, did we remember to include our API key?",
    ],
    403: [
      "403 Forbidden! Aw jeez, we're not supposed to be here!",
      "Oh man, this is like trying to sneak into the principals office!",
      "Forbidden? I-I'm getting really nervous about this, Rick!",
    ],
    404: [
      "404 Not Found! Aw jeez, this page just disappeared or something!",
      "Oh man, we're looking for something that doesn't exist!",
      "404? This is like trying to find my confidence at school!",
    ],
    500: [
      "500 Internal Server Error! Oh no, I think we broke their server!",
      "Aw jeez, something went really wrong on their end!",
      "Internal server error? I-I hope they don't blame us for this!",
    ],
    502: [
      "502 Bad Gateway! Oh man, the servers can't talk to each other!",
      "Aw jeez, it's like when the phone lines get all tangled up!",
      "Bad gateway? This is making me really anxious, Rick!",
    ],
    503: [
      "503 Service Unavailable! Oh no, their website is taking a break!",
      "Aw jeez, the service is down! Should we try again later?",
      "503? Maybe their servers are just having a bad day like me at school!",
    ],
  },

  default: {
    400: [
      "400 Bad Request! Looks like the server didn't like your request format!",
      "Bad request detected! Time to check those parameters!",
      "400 error: Your request needs some TLC!",
    ],
    401: [
      "401 Unauthorized! Did you forget your login credentials?",
      "Authentication required! Time to prove who you are!",
      "401 error: You shall not pass... without proper auth!",
    ],
    403: [
      "403 Forbidden! Access denied to this resource!",
      "Forbidden territory! You don't have permission for this!",
      "403 error: This area is VIP only!",
    ],
    404: [
      "404 Not Found! This page has gone on vacation!",
      "Resource not found! It's playing hide and seek!",
      "404 error: We've searched everywhere, but it's not here!",
    ],
    500: [
      "500 Internal Server Error! The server is having a bad day!",
      "Server error! Something went wrong behind the scenes!",
      "500 error: The server needs some debugging love!",
    ],
    502: [
      "502 Bad Gateway! The servers are having communication issues!",
      "Bad gateway! It's like a broken telephone game!",
      "502 error: The server middleman dropped the ball!",
    ],
    503: [
      "503 Service Unavailable! The server is taking a coffee break!",
      "Service unavailable! Please try again later!",
      "503 error: The server is temporarily out of order!",
    ],
  },
};
