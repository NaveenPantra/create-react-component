# create-react-component
ReactJs module/directory/files creator.

## About
This CLI tool will help you to create a file structure and boilerplate for the component.

### Example on how this works

The file `index.js` will be created from a file `index.ejs` and the template engine `ejs` will parse the content based on condition we pass and generate the output.

1. Input `lib/fileData/index.ejs`
```ejs
<% if (isTypeSafe) { %>//@flow<% } %>
import React from 'react'
<% if (isTypeSafe) { %>import type { Node } from 'react'<% } %>
import use<%= componentName %>Styles from './index.styles'
<% if (isTypeSafe) { %>import type { <%= componentName %>Props } from './index.types'<% } %>
const <%= componentName %> = (props<% if (isTypeSafe) { %>: <%= componentName %>Props<% } %>)<% if (isTypeSafe) { %>: Node<% } %> => {
  const classes = use<%= componentName %>Styles()
  return <div className={classes.root}></div>
}
export default <%= componentName %>
```

2. Output `/ComponentName/index.js`
```JSX
//@flow
import React from 'react'
import type { Node } from 'react'

import useComponentNameStyles from './index.styles'
import type { ComponentNameProps } from './index.types'

const ComponentName = (props: ComponentNameProps): Node => {
  const classes = useComponentNameStyles()

  return <div className={classes.root}></div>
}

export default ComponentName

```

### Screenshots

1. Enter component name
<img width="757" alt="Screenshot 2021-12-06 at 23 00 25" src="https://user-images.githubusercontent.com/26146760/144893651-522ed2f4-8595-45be-9dcc-b3dc829cee62.png">

2. Choose predifined File structure
<img width="768" alt="Screenshot 2021-12-06 at 23 00 40" src="https://user-images.githubusercontent.com/26146760/144893667-400fe4a8-4fd3-4d27-9cc6-e4fbe88aff62.png">

3. Confirm file structure
<img width="761" alt="Screenshot 2021-12-06 at 23 00 59" src="https://user-images.githubusercontent.com/26146760/144893677-10fc3950-7921-4de2-84b7-76a276154c48.png">

4. Choosing wether custom file are typed or not.
<img width="765" alt="Screenshot 2021-12-06 at 23 01 25" src="https://user-images.githubusercontent.com/26146760/144893692-f7651093-b357-4923-9928-e6730e9a696f.png">

5. Choosing files (before selecting)
<img width="766" alt="Screenshot 2021-12-06 at 23 01 35" src="https://user-images.githubusercontent.com/26146760/144893704-acc920ae-d9c6-464f-a5c3-33c3920d8ac8.png">

6. Choosing files (after selection selecting)
<img width="758" alt="Screenshot 2021-12-06 at 23 02 02" src="https://user-images.githubusercontent.com/26146760/144893719-42c485f7-2c4f-4821-a38a-5c918daf33ba.png">

7. Comfirm custom files
<img width="761" alt="Screenshot 2021-12-06 at 23 02 09" src="https://user-images.githubusercontent.com/26146760/144893729-b874ec03-26ac-43b0-a506-34fb0da83e66.png">

