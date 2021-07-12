import aws from "aws-sdk";
import pug from "pug";
import path from "path";

export default function sendSESMail(requestData) {
    console.log("requestData====", requestData)
    if (!requestData)
        return false;
    let config = {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY,
        region: 'us-east-1'
    }
    aws.config.update(config);
    // Create sendEmail params
    var params = {
        Destination: {
            ToAddresses: [
                'imharshitarora5@gmail.com',
                'sunnypardhan80@gmail.com',
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `<div><div>Name: ${requestData.name}</div> <br/>
<div>Contact Number: ${requestData.contactNumber}</div> <br/>
<div>Email: ${requestData.email}</div> <br/>
<div>Description: ${requestData.description}</div> <br/></div>`
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "This is the message body in text format."
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Test email"
            }
        },
        Source: 'sunnypardhan80@gmail.com'
        // Source: 'imharshitarora5@gmail.com'
    };

    const ses = new aws.SES({apiVersion: '2010-12-01'});
    return new Promise(function (resolve, reject) {
        ses.sendEmail(params, function (err, response) {
            console.log("err====", err)
            console.log("response====", response)
            if (err)
                reject(err);
            resolve(response);

        })
    });

}
