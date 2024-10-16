import { readdir } from 'node:fs/promises';
import 'dotenv/config';

export const rdDir = async ({modNum}="") => await readdir(modNum?`${process.env.STUDENT_REPO}/${modNum}/01-Activities`:`${process.env.MAIN_REPO}`)