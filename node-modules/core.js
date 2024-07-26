const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(path.basename(__filename));
util.log(path.basename(__filename));

const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);
util.log(dirUploads);

util.log(v8.getHeapStatistics());
// 25 Jul 15:08:07 - {
//   total_heap_size: 4632576,
//   total_heap_size_executable: 262144,
//   total_physical_size: 4198400,
//   total_available_size: 4342246328,
//   used_heap_size: 3985424,
//   heap_size_limit: 4345298944,
//   malloced_memory: 262320,
//   peak_malloced_memory: 108032,
//   does_zap_garbage: 0,
//   number_of_native_contexts: 1,
//   number_of_detached_contexts: 0,
//   total_global_handles_size: 8192,
//   used_global_handles_size: 2464,
//   external_memory: 1425876
// }