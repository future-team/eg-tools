# eagle

抽离redux绑定react的公共代码

使用：
```
		import React from 'react';
        import AppRouter from './src/containers/AppRouter';
        import {BindReact} from 'eagle';

        import * as reducers from './src/reducers';

        require('./less/index.less');
        //require('../less/public.less');

        React.render(
        <BindReact Module={AppRouter} reducers={reducers} />,
        document.getElementById('root')
        );

```