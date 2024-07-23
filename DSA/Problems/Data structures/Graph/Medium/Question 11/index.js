//*	Course Schedule
var canFinish = function (numCourses, prerequisites) {
  let preMap = {};
  for (let i = 0; i < numCourses; i++) {
    preMap[i] = [];
  }

  for (let [crs, pre] of prerequisites) {
    preMap[crs].push(pre);
  }

  let visitSet = new Set();
  function dfs(crs) {
    if (visitSet.has(crs)) {
      return false;
    }
    if (preMap[crs].length === 0) {
      return true;
    }

    visitSet.add(crs);
    for (let pre of preMap[crs]) {
      if (!dfs(pre)) return false;
    }
    visitSet.delete(crs);
    preMap[crs] = [];
    return true;
  }

  for (let crs = 0; crs < numCourses; crs++) {
    if (!visitSet.has(crs) && !dfs(crs)) return false;
  }
  return true;
};
