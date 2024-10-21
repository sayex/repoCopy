import inquirer from "inquirer";
const {prompt} = inquirer;


export const showMenu = async () => {
	const menuOptions = [
		"New Week Full Automation",
		"Copy New Module",
		"Copy Solutions to Module",
		"Setup New Repo",
		"Remove Solved",
		"Exit",
	];

	const { menuChoice } = await prompt([
		{
			type: "list",
			name: "menuChoice",
			message: "What do you want to do?",
			choices: menuOptions,
		},
	]);

	return menuChoice;
};
