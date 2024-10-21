import { rdDir } from './rdDir.js';
import inquirer from 'inquirer';
import { access, cp } from 'fs/promises';
const { prompt } = inquirer;

export const cpSolved = async ({ modNum }) => {
	console.log(modNum);

	const activityOptions = await rdDir({ modNum });

	const { activitys } = await prompt([
		{
			type: 'checkbox',
			name: 'activitys',
			message: 'What is the activity?',
			choices: activityOptions
		}
	]);
	await Promise.all(
		activitys.map(async (activity) => {
			try {
				await cp(`${process.env.MAIN_REPO}/${modNum}/01-Activities/${activity}/Solved`, `${process.env.STUDENT_REPO}/${modNum}/01-Activities/${activity}/Solved`, { recursive: true });
			} catch (error) {}
			try {
				await cp(`${process.env.MAIN_REPO}/${modNum}/01-Activities/${activity}/Main`, `${process.env.STUDENT_REPO}/${modNum}/01-Activities/${activity}/Main`, { recursive: true });
			} catch (error) {}
		})
	);
};
