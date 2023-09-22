
const getStoredJobApplication = () => {
    const storedJObApplication = localStorage.getItem("job-applications");
    if (storedJObApplication) {
        return JSON.parse(storedJObApplication);
    }
    return [];
}


const saveJobApplication = id => {
    const StoredJobApplication = getStoredJobApplication();
    const exist= StoredJobApplication.find(jobId=> jobId === id);
    if(!exist){
        StoredJobApplication.push(id);
        localStorage.setItem("job-applications", JSON.stringify(StoredJobApplication))
    }
}

export { saveJobApplication, getStoredJobApplication };