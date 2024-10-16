import inquirer from "inquirer";
const {prompt} = inquirer;


export const showMenu = async () => {
	const menuOptions = [
		"Copy new Module",
		"Copy solutions to Module",
		"Setup new Repo",
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
