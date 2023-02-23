// Garbage Collection = GC
// Global variables remain in memory until the app exits.
const global = 1;
{
  // Local variables exist only inside the block and disappear automatically at the end of the block.(GC)
  const local = 1;
}
function print() {
  // declare the variable and use it within the block.
  if (true) {
    let temp = 0;
  }
}
