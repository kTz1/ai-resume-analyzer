/**
 * Formats a file size in bytes to a human readable string (KB, MB, GB)
 * @param bytes - The size in bytes to format
 * @returns A human readable string representing the size
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];

  // Calculate the power (log) to determine the appropriate unit
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Format with 2 decimal places and trim unnecessary zeros
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
