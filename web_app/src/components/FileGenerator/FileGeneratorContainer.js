import { useState } from "react";
import { get } from "../../util/httpClient";

const FileGeneratorContainer = () => {
    
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState({
        integetCount: 0,
        alphanumaricCount: 0,
        realNumderCount: 0,
        alphanumaricStringCount: 0
    });

    const getReport = () => {
        setLoading(true);
        get('/get-report').then(response => {
            setLoading(false);
            if(response) {
                setReport(response);
            }
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    const generateFile = () => {
        setLoading(true);
        get('/generate-file').then(response => {
            console.log(response);
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    return {
        loading,
        getReport,
        generateFile,
        report
    };
}

export default FileGeneratorContainer;