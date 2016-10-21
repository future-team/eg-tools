# eg-tools


## Install

```bash
$ npm install eg-tools --save
```

## 依赖

* immutable.js

## Usage

```js

		//BindReact,createReducer,fetch,fetching,promisefetch
		
		import React from 'react';
		import AppRouter from './containers/AppRouter';
		import {BindReact,fetch,createReducer} from 'eg-tools';
		
		import * as reducers from './reducers/index';
		require('../less/index.less');
		//require('../less/public.less');
		
		/** BindReact   用于redux和react建立联系*/
		//autoShowFetching 是否自动显示loadingBar
		//middleware 自定义中间件
		//reducers redux store集合
		//barName loadingBar名字，有两种，分别为web和app两种选择
		//Module react 组件对象
		
		React.render(
		<BindReact Module={AppRouter} reducers={reducers} autoShowFetching={false} barName="web" middleware={[]}>
		    {<!--此处元素会追加到页面的body结束符之前主内容外-->}
		    <div></div>
		</BindReact>,
		document.getElementById('root')
		);
		
		//数据获取
		fetch('test/test'/*url*/,{}/*params*/,function(data){
			dispatch({
				type: actionType.QUERY,
				data: data
			});
		}/*success callback*/,function(){}/*error callback*/,{}/*options*/)
		
		//promisefetch
		import {promisefetch as fetch} from 'eg-tools';
		
		fetch('/test',{
		    body:{},
		    timeout:null,
		    asyn:false,
		    dataType:'json',
		    header:{},
		    method:'get',
		}).then(function(data){
    
                dispatch({
                    type: actionType.QUERY,
                    data: data
                });
        }).then(()=>{
            console.dir('test fetch for promise');
        }).then(()=>{
            console.dir('callback');
        },(xhr)=>{
            console.dir(xhr);
        });
        
		
		//创建store
		export const test = createReducer(initialState, {
            [actionType.QUERY]: (data, action) => {
                return data.merge(Immutable.fromJS(action.data));
            }
        })
        //增加全局失败提示方法，默认为空。若有fetch.errorEvent方法,则执行该方法。可统一处理。
        //增加全局成功提示方法，默认为空。若有fetch.successEvent方法,则执行该方法
        
```

## 双向绑定

### 1. createReducer

```js
    
    import { createReducer } from 'eg-tools';
    import Immutable from 'immutable';
    
    import {actionType} from '../constants/action-type.es6';
    
    const initialState = Immutable.fromJS({
        name:'init'
    });
    
    export const test = createReducer('test',initialState, {
        [actionType.QUERY]: (data, action) => {
            return data.merge(Immutable.fromJS(action.data));
        }
    });
```

### 2. setStore

```js
    
    import {bindingMixin} from 'eg-tools';
    
    @bindingMixin
    export default class TestWebContainer extends Component {
        constructor(props) {
            super(props);
            
            //关联store
            this.setBinding('test');
    
        }
    }
```

### 3. binding

```js

        render() {
            return (
                <div>
                    <input type="text"  valueLink={this.binding('name')  } />
                    {this.props.test.get('name') }
                </div>
            );
        }
```

## Manual Change Functions

帮助用户快速根据reducer路径更改store值，避免写更多的action。

1. 手动根据路径改变reducer的值:

```js

    this.manualChange('name', 'john');
```

2. 手动根据路径改变reducer的值:

```js

    this.manualChange('name', function(age){
        return ++age;
    });
```


## update

* `version 3.0.3` 新增双向绑定，store数据可视视图
* `version 4.0.2` 新增promise fetch方法，新增移动端loadingbar，增加fetch返回值为request对象 ；新增fetch loadingbar状态fetch_submit_begin；对外提供LoadingBar组件
* `version 4.0.3` 更改双向绑定深入修改时的语法。
* `version 4.0.4` 关闭自动弹出redux日志面板，改为通过autoDevTools来控制显示或隐藏。
* `version 5.0.1` 修改mock url地址在深目录的情况下能够正常请求