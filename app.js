import { cpNewMod, getModuleNumber, rdDir, showMenu, removeSolved } from "./modules/index.js"


async function main() {
	const menuChoice = await showMenu();

	switch (menuChoice) {
		case "Copy new Module": {
			const moduleOptions = await rdDir();
			const { modNum } = await getModuleNumber(moduleOptions);
			await cpNewMod({ modNum });
			main();
			break;
		}
		case "Copy solutions to Module":
			break;
		case "Setup new Repo":
			break;
		case "Remove Solved": {
			const moduleOptions = await rdDir();
			const { modNum } = await getModuleNumber(moduleOptions);
			const activityOptions = await rdDir({ modNum });
			await removeSolved(activityOptions, { modNum });
			main();
			break;
		}
		case "Exit":
			break;
	}
};

main();