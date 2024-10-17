import { cpNewMod, getModuleNumber, rdDir, showMenu, removeSolved } from "./modules/index.js"


async function main() {
	
	const menuChoice = await showMenu();
	let options
	let modNum
	switch (menuChoice) {
		case "Copy new Module":
			options = await rdDir();
			modNum = await getModuleNumber(options);
			await cpNewMod(modNum);
			main();
			break;
		case "Copy solutions to Module":
			break;
		case "Setup new Repo":
			break;
		case "Remove Solved":
			options = await rdDir();
			modNum = await getModuleNumber(options);
			const answer = await rdDir(modNum);
			await removeSolved(answer, modNum);
			main();
			break;
		case "Exit":
			break;
	}
};

main();