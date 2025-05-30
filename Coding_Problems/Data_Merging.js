/**
 * Input: [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];
Each session has the following fields:

user: User ID of the session's user.
duration: Duration of the session, in minutes.
equipment: Array of equipment used during the sessions, in alphabetical order. There are only 5 different equipments.
Implement a method mergeData, which is used to return a unified view of each user's activities by merging data from each user. It has the interface mergeData(sessions). Sessions from the same user should be merged into one object. When merging:

Sum up the duration fields.
Combine all the equipment used, de-duplicating the values and sorting alphabetically.
The order of the results should always remain unchanged from the original set, and in the case of merging sessions with the same users, the row should take the place of the earliest occurrence of that user. The input objects should not be modified.

Output:
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

*/

const data = [
  { user: 8, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 1, duration: 10, equipment: ["barbell"] },
  { user: 7, duration: 100, equipment: ["bike", "kettlebell"] },
  { user: 7, duration: 200, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["treadmill"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

const mergeData = (sessions) => {
  const results = [];
  const sessionMap = new Map();

  sessions.forEach((session) => {
    // check whether the current session user present in map
    if (sessionMap.has(session.user)) {
      const currentSession = sessionMap.get(session.user);
      currentSession.duration += session.duration;
      session.equipment.forEach((element) => {
        currentSession.equipment.add(element);
      });
    } else {
      const clonedSession = {
        ...session,
        equipment: new Set(session.equipment),
      };
      sessionMap.set(session.user, clonedSession);
      results.push(clonedSession);
    }
  });
  return results.map((ele) => ({
    ...ele,
    equipment: Array.from(ele.equipment).sort(),
  }));
};

console.log(mergeData(data));
