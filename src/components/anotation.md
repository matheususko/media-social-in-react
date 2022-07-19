# key no React

## Por que única?

3 momentos em que um componente é renderizado novamento no React.

1.  Quando o estado é alterado;
2.  Quando a propriedade altera;
3.  Quando um componente pai renderiza novamente.
---
1, 2, 3, 4
--- 
1, 2, 3, 4, 5

## Por que não posso usar o índice do array?

```js
const posts = [1, 2, 5, 4, 3]
//0, 1, 2, 3, 4
```
## Closures no React

```js
function Comment(props) {
    connst [likes, setLikes] = useState(0)

    funtion addLike() {
        setLikes(likes+1);
    }
}

Comment(props, 1)
```