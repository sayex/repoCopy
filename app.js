import { cpNewMod, getModuleNumber, rdDir, showMenu, removeSolved, cpSolved } from './modules/index.js';
import { exec } from 'child_process';
import util from 'util';
const execPromise = util.promisify(exec);

async function main() {
	const choice = await showMenu();

	switch (choice) {
		case 'Copy New Module':
			await pullLatestMainRepo();
			const moduleOptions = await getModuleOptions();
			const { modNum } = await getModuleNumber(moduleOptions);
			console.log('Copying new module...');
			await copyNewModule({ modNum });
			console.log('Done!');

			await main();
			break;

		case 'Copy Solutions to Module': {
			const moduleOptions = await getModuleOptions();
			const { modNum } = await getModuleNumber(moduleOptions);
			await cpSolved({ modNum });
			await main();
			break;
		}

		case 'Setup New Repo':
			// TODO: complete this
			console.log('Not yet implemented');
			await main();

			break;

		case 'Remove Solved':
			await removeSolvedActivities();
			await main();
			break;

		case 'New Week Full Automation':
			await performFullAutomation();
			console.log('Done!');

			await main();
			break;

		case 'Exit':
			process.exit();
		case 'Commit':
			try {
				await execPromise(`git add .`, { cwd: process.env.STUDENT_REPO });
				await execPromise(`git commit -m "Updated"`, { cwd: process.env.STUDENT_REPO });
				await execPromise(`git push`, { cwd: process.env.STUDENT_REPO });
				await main();
			} catch (error) {
				console.log(error);
				await main();
			}
	}
}

async function pullLatestMainRepo() {
	console.log('Pulling latest code from main repo...');
	await execPromise(`git pull`, { cwd: process.env.MAIN_REPO });
	return;
}

async function getModuleOptions() {
	return await rdDir();
}

async function copyNewModule({ modNum }) {
	await cpNewMod({ modNum });
}

async function removeSolvedActivities(modNum) {
	const moduleOptions = await getModuleOptions();
	if (!modNum) {
		var { modNum } = await getModuleNumber(moduleOptions);
	}
	const activityOptions = await rdDir({ modNum });
	console.log("Removing 'Solved' and 'Main' directories...");

	await removeSolved(activityOptions, { modNum });
}

async function performFullAutomation() {
	try {
		await pullLatestMainRepo();
		const moduleOptions = await getModuleOptions();
		const { modNum } = await getModuleNumber(moduleOptions);
		console.log('Copying new module...');
		await copyNewModule({ modNum });
		await removeSolvedActivities(modNum);
		console.log('Pushing changes to main repo...');
	} catch (error) {
		throw error;
	}
}

main();
