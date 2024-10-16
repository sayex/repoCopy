import {rm} from 'node:fs/promises';
import 'dotenv/config';


export const rmSolved = async (directories, {modNum}) => {
directories.forEach(async element => {
	await rm(`${process.env.STUDENT_REPO}/${modNum}/01-Activities/${element}/Solved`, { recursive: true, force: true });
	await rm(`${process.env.STUDENT_REPO}/${modNum}/01-Activities/${element}/Main`, { recursive: true, force: true });
	await rm(`${process.env.STUDENT_REPO}/${modNum}/02-Challenge/Main`, { recursive: true, force: true });
});
}