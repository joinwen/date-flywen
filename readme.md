## date-flywen

### Build
`npm run build`

### Install
`npm install date-flywen`

### Format Literal
- **yy**
  
  `21`

- **yyyy**

  `2021`
  
- **M**
  
    `1`
  
- **MM**
  
    `01`
  
- **d**
    
    `1`
  
- **dd**
  
    `01`

- **h**
  
    `1`
  
- **hh**

    `01`
  
- **m**

    `1`
  
- **mm**

    `01`
  
- **s**
  
    `1`
  
- **ss**

    `01`
  
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
dateFlywen.format(new Date());  // 2021-02-18 22:12:26
```
