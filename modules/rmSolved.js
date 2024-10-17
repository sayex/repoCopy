import {rm} from 'node:fs/promises';
import 'dotenv/config';


/**
 * Removes 'Solved' and 'Main' directories for each provided directory within a module.
 *
 * @param {Array} directories - List of directory names to process within the module.
 * @param {Object} options - Options object.
 * @param {string} options.modNum - Module number to target within the STUDENT_REPO.
 *
 * The function removes the following directories:
 * - 'Solved' and 'Main' directories inside '01-Activities' for each provided directory.
 * - 'Main' directory inside '02-Challenge' for the specified module.
 * 
 * It uses the Node.js `rm` method with recursive and force options to ensure directories are removed.
 */
export const removeSolved = async (directories, {modNum }) => {
  await Promise.all(
    directories.map(async (directory) => {
      await rm(`${process.env.STUDENT_REPO}/${modNum}/01-Activities/${directory}/Solved`, {
        recursive: true,
        force: true,
      });
      await rm(`${process.env.STUDENT_REPO}/${modNum}/01-Activities/${directory}/Main`, {
        recursive: true,
        force: true,
      });
    })
  );

  await rm(`${process.env.STUDENT_REPO}/${modNum}/02-Challenge/Main`, {
    recursive: true,
    force: true,
  });
};
