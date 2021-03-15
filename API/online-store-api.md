# 线上商城

## 1. 首页数据

```json
GET /
```

参数

```
无
```

返回

```json
{
  code: 0,
  msg: "success",
  data: {
  posters:[
        {
          id:1,
          thumb: "../static/1.jpg"
        }       
      ],
    hot: [
      {
        id: 1,
        name: "Nike Air Force 1",
        original_price: 800.00,
        category: "男子运动鞋",
        thumb: "../static/...jpg"
      }
    ]，
    sales: [
    	{
    	id: 2,
        name: "Nike Air Max",
    	current_price: 399.00,
        original_price: 599.00,
        category: "男子运动鞋",
        thumb: "../static/...jpg"
  		}
    ],
  	new_arrivals: [
  		{
  		id: 3,
        name: "Air Jordan",
        original_price: 1499.00,
        category: "男子篮球鞋",
        thumb: "../static/...jpg"
		}
  	] 
  }
}
```

