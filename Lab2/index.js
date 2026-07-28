import { writeFile,readFile,appendFile} from "fs/promises";
// // await writeFile('stud.txt',"Ramesh Kumar\nRollNo:75");
// // console.log("File written");
// const data = await readFile("stud.txt","utf-8");
// console.log(`File Contents:${data}`);

const addContent = async(fname, content) => {
    await writeFile(fname, content); // writes content to file
    console.log("File written successfully");
};

const readContent = async (fname) => {
    const data = await readFile(fname, "utf-8"); // reads file content
    return data;
};
const appendData = async (fname,content)=>{
    await appendFile(fname,"\n"+content);
    console.log("Data Appended");
    
};
await addContent("notes.txt","FS in easy in JS");
console.log("Contents\n", await readContent("notes.txt"));
await appendData('notes.txt',"It can be add,read and update content");
console.log("Updated Contents\n",await readContent("notes.txt"));


