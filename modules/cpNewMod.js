import {cp} from "fs/promises";
import 'dotenv/config';
import inquirer from "inquirer";
const {prompt} = inquirer;


export const getModuleNumber = async options => {

	const { modNum } = await prompt([
		{
			type: 'list',
			name: 'modNum',
			message: 'What is the Module?',
			choices: options,
		},
	]);

	return { modNum };
};

export const cpNewMod = async ({modNum}) => await cp(`${process.env.MAIN_REPO}/${modNum}`, `${process.env.STUDENT_REPO}/${modNum}`, { recursive: true });
