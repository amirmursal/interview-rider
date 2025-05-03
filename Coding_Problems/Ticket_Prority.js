/**
 * This problem involves sorting tickets based on their priority and timestamp.
 * Each ticket is represented as a pair [priority, timestamp].
 * Rules:
 * Tickets with higher priority should be processed first.
 * If multiple tickets have the same priority, process the older one first (lower timestamp).
 * const input1 = [[3, 104], [1, 101], [4, 103], [2, 100], [4, 102]];
 * output1 // [103, 102, 104, 100, 101]
 */

function ticketPriority(tickets) {
  // Sort by descending priority and then by ascending timestamp
  tickets.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0]; // Higher priority first
    }
    return b[1] - a[1]; // Earlier timestamp first
  });

  // Extract only the timestamps
  return tickets.map((ticket) => ticket[1]);
}

const input = [
  [3, 104],
  [1, 101],
  [4, 103],
  [2, 100],
  [4, 102],
];
console.log(ticketPriority(input));
