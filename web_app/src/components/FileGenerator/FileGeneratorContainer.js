import { useState } from "react";
import { download, get } from "../../util/httpClient";
import { toast } from 'react-toastify';
const FileDownload = require("js-file-download");

const FileGeneratorContainer = () => {

    const errorMessage = "Something went wrong. plese try again later.";
    
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState({
        integetCount: 0,
        alphanumaricCount: 0,
        realNumderCount: 0,
        alphanumaricStringCount: 0
    });
    const [fileInfo, setFileInfo] = useState({
        isSuccess: false,
        fileName: ''
    });

    const downloadFile = () => {
        setLoading(true);
        download('GET', '/download-file').then(response => {
            setLoading(false);
            if(response) {
                toast("File downloaded succefully.");
                FileDownload(response, "RandomFile.txt");
            }
        }).catch(error => {
            toast(errorMessage);
            console.log(error);
            setLoading(false);
        });
    }

    const getReport = () => {
        setLoading(true);
        get('/get-report').then(response => {
            setLoading(false);
            if(response) {
                toast("Successfully got report information.");
                setReport(response);
            }
        }).catch(error => {
            toast(errorMessage);
            console.log(error);
            setLoading(false);
        });
    }

    const generateFile = () => {
        setLoading(true);
        get('/generate-file').then(response => {
            toast("File successfully generated.");
            setFileInfo(response);
            setLoading(false);
        }).catch(error => {
            toast(errorMessage);
            console.log(error);
            setLoading(false);
        });
    }

    return {
        loading,
        getReport,
        generateFile,
        report,
        downloadFile,
        fileInfo
    };
}

export default FileGeneratorContainer;