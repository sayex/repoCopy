import { cpNewMod, getModuleNumber, rdDir, showMenu, removeSolved } from "./modules/index.js"


(async () => {
	const menuChoice = await showMenu();
	let options
	let modNum
	switch (menuChoice) {
		case "Copy new Module":
			options = await rdDir();
			modNum = await getModuleNumber(options);
			await cpNewMod(modNum);
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
			
			break;
		case "Exit":
			break;
	}
})()