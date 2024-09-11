
const webConfig={
    testDir: './tests',
    retries :1,
    workers: 3, // Run the testcases in different files in parallel. tests in same file will run sequentially
    reporter: 'html',
    timeout:30*1000,
    expect:{
      timeout:5000,
    },

    projects:[
        {
            name : 'safari',
            use: {

                browserName : 'webkit',
                headless:false,
                screenshot:'on',
                trace :'retain-on-failure', 
                video: 'retain-on-failure',
                ignoreHttpsErrors:true,
                permissions:['geolocation'],
                viewport : {width:900,height:720}      // Adjust the browser size     
            }
        },
        {
            name : 'chrome', 
            use: {

                browserName : 'chromium',
                headless:false,
                screenshot:'on',
                trace :'retain-on-failure', 
                video: 'retain-on-failure',
                ignoreHttpsErrors:true,
                permissions:['geolocation'],
                viewport : {width:1400,height:1400}      // Adjust the browser size     
            }
        }

    ]
}

module.exports = webConfig;
