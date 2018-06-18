# status-codes


## Install

```bash
npm install @woopidi/status-codes --save
```

## Example

```javascript
import { StatusCode, Types } from "@woopdi/status-codes";

app.get('/', (req, res) => {
  res.status(StatusCode.OK).send('Hello World')
});
```

## Codes

{{codes}}