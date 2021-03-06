## date-flywen

### Build
`npm run build`

### Install
`npm install date-flywen`

### Format Literal
- **yy**
  
  `2021-02-19 12:30:15` => `21`

- **yyyy**

  `2021-02-19 12:30:15` => `2021`
  
- **M**

  `2021-02-19 12:30:15` => `2`
  
- **MM**

  `2021-02-19 12:30:15` => `02`
  
- **d**

  `2021-02-19 12:30:15` => `19`
  
- **dd**

  `2021-02-19 12:30:15` => `19`

- **h**

  `2021-02-19 12:30:15` => `12`
  
- **hh**

  `2021-02-19 12:30:15` => `12`
  
- **m**

  `2021-02-19 12:30:15` => `30`
  
- **mm**

  `2021-02-19 12:30:15` => `30`
  
- **s**

  `2021-02-19 12:30:15` => `15`
  
- **ss**

  `2021-02-19 12:30:15` => `15`
  
- **S**
  
    `0`

- **SS**
  
    `0000`

- **O**
    
    `+0800`


### Parse

1920-1-27 12:24:24:1234+0800

yyyy-M-dd hh:mm:ss:SSO
### Usage
```
const dateFlywen = require("date-flywen");
dateFlywen.format(new Date());            // 2021-02-18 22:12:26


dateFlywen.format("yyyy-M-d hh:mm:ss");   // 2021-2-18 22:12:26

dateFlywen.parse("hh:mm:ss","09:30:15");  // Fri Dec 10 2021 09:30:15 GMT+0800

dateFlywen.parse("yyyy-MM-dd hh:mm:ss", "2021-02-18 22:12:26");   // Thu Feb 18 2021 22:12:26 GMT+0800 (中国标准时间)
 
```
