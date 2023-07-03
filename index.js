const { execSync, exec } = require('child_process')



const fs = require('fs');



exports.handler = async(event) => {
    execSync('rm -rf /tmp/*', { encoding: 'utf8', stdio: 'inherit' });

    execSync('cd /tmp && git clone https://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@github.com/aledcds/lambdaAction.git --branch=main lambdaAction', { encoding: 'utf8', stdio: 'inherit' });
    execSync('cd /tmp/lambdaAction && git remote set-url origin https://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@github.com/aledcds/lambdaAction.git', { encoding: 'utf8', stdio: 'inherit' });
    //git remote set-url origin https://scuzzlebuzzle:<MYTOKEN>@github.com/scuzzlebuzzle/ol3-1.git
    //  execSync('cd /tmp/lambdaAction && git config pull.rebase false', { encoding: 'utf8', stdio: 'inherit' });

//  execSync('cd /tmp/lambdaAction && git pull origin main', { encoding: 'utf8', stdio: 'inherit' });

//   exec('cd /tmp && git clone https://github.com/aledcds/lambdaAction', (error, stdout, stderr) => {
//   if (error) {
//      console.error(`exec error: ${error}`);
//      return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
//   execSync('git checkout -b demoPush', { encoding: 'utf8', stdio: 'inherit' });
//  });

    execSync('cd /tmp/lambdaAction && echo "data to append" >> README.md', { encoding: 'utf8', stdio: 'inherit' })
    console.log('init!');

    //  execSync('cd /tmp/lambdaAction && git config http.sslVerify false', { encoding: 'utf8'}).split('\n');
    execSync('cd /tmp/lambdaAction && git config user.email "aledcds@gmail.com"', { encoding: 'utf8'}).split('\n');
    execSync('cd /tmp/lambdaAction && git config user.name "aledcds"', { encoding: 'utf8'}).split('\n')

    //hub remote set-url upstream https://$token:x-oauth-basic@github.com/aledcds/lambdaAction.git
    //hub remote set-url origin https://$token:x-oauth-basic@github.com/aledcds/lambdaAction.git

    // execSync('cd /tmp/lambdaAction && git remote set-url origin https://github.com/aledcds/lambdaAction.git', { encoding: 'utf8'}).split('\n');



    //    execSync('cd /tmp/lambdaAction && git config --global user.email "aledcds@gmail.com"', { encoding: 'utf8'}).split('\n');
    //    execSync('cd /tmp/lambdaAction && git config --global user.name "aledcds"', { encoding: 'utf8'}).split('\n');


    execSync('cd /tmp/lambdaAction && git status', { encoding: 'utf8'}).split('\n');

    execSync('cd /tmp/lambdaAction && git commit -am "add content"', { encoding: 'utf8', stdio: 'inherit' });

    execSync('cd /tmp/lambdaAction && git push origin main', { encoding: 'utf8', stdio: 'inherit' });

    return execSync('cat /tmp/lambdaAction/README.md', { encoding: 'utf8' }).split('\n');
};