const { devices } = require('@playwright/test');

const mobileConfig={
    testDir: './tests',
    retries :1,
    workers: 3,
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
                ...devices['iPhone 11'],    
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
                ...devices['Galaxy S8 landscape']

            }
        }

    ]
}

module.exports = mobileConfig;
