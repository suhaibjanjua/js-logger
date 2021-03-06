# js-logger

Lightweight JavaScript Logger for the browser and node. It is a perfect logger that supports all browsers.

It allows to print color logs with pre-defined 5 levels of logging (info, warning, error, success, debug). It has a debug mode in which you can print logs during dev and then set it to false to avoid printing confidential logs in production.

Use the script tag to inject into your project via browser ready release.

`<script src="https://raw.githubusercontent.com/suhaibjanjua/js-logger/master/js-logger.min.js"></script>`

## Methods

Use the following methods to print logs in browser console.

Some basic Git commands are:
```
jslogger.info(process, message);
jslogger.warning(process, message);
jslogger.error(process, message);
jslogger.success(process, message);
jslogger.debug(process, message);
```

Debug logs will only work if the `VERBOSE` property is set to true by the following method:

`jslogger.setLevelToVerbose(true);`


## Example

`jslogger.info('Authentication', 'Connection in progress');`

**Mon Aug 12 2019 22:37:57 | JSLogger | [Authentication] :: Connection in progress**


## Log Format

**UTC Date | AppName | [Process] :: Message**


## Change the Default AppName

```
jslogger.setAppName('SuhaibJanjuaLogger');
jslogger.info('Authentication', 'Connection in progress');
```

**Mon Aug 12 2019 22:37:57 | SuhaibJanjuaLogger | [Authentication] :: Connection in progress**


## Download logs as a text file

```
jslogger.downloadLogs()
```
