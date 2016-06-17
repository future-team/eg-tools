# eg-tools


## Install

```bash
$ npm install eg-tools --save
```


## Usage

```js

		//BindReact,createReducer,fetch,fetching
		
		import React from 'react';
		import AppRouter from './containers/AppRouter';
		import {BindReact,fetch,createReducer} from 'eg-tools';
		
		import * as reducers from './reducers/index';
		require('../less/index.less');
		//require('../less/public.less');
		
		React.render(
		<BindReact Module={AppRouter} reducers={reducers} />,
		document.getElementById('root')
		);
		
		//数据获取
		fetch('test/test',{},function(data){
			dispatch({
				type: actionType.QUERY,
				data: data
			});
		})
		
		export const test = createReducer(initialState, {
            [actionType.QUERY]: (data, action) => {
                return data.merge(Immutable.fromJS(action.data));
            }
        })
        //增加全局失败提示方法，默认为空。若有fetch.errorEvent方法,则执行该方法。可统一处理。
        //增加全局成功提示方法，默认为空。若有fetch.successEvent方法,则执行该方法
        
```

