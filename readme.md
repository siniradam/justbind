# Just Bind

It's a small js library to bind a variable to HTML elements..

Inspired from [Svelte Store](https://svelte.dev/docs#run-time-svelte-store).

When it's called returns an object with four methods.
- `set`
- `get`
- `update`
- `subscribe`

```js
import justBind from 'justbind';

const name = justBind('name'/*, initial value*/);
```


### Set Method
This immediately sets the value of `name` to given value.
```js
name.set('John');
```


### Get Method
This returns the current value of `name`.
```js
name.get(); //Returns 'John'
```

### Update Method
This is used to update the value of `name`, it accepts a function that returns the new value. Current value is passed to the function.

```js
name.update(value => value + ' Doe');
```


### Subscribe Method
This accepts a callback function that is called whenever the value of `name` changes. Either by calling `set` or `update` methods or via assigned inputs.
```js
name.subscribe(value => console.log(value));

name.set('John');

// Console prints output:
// John

```


### Bind Value to HTML Elements
You can bind the value of `name` to HTML elements. Whenever the value of `name` changes, the value of the HTML element will be updated or if it's an input, the value of the input will be updated.

Values also will be updated when the content of the HTML element is changed, like if you type something in the input.

```html
<script>
    const name = justBind('name',"John");
</script>

<input type="text" bind="name">

```


## Things to consider before use/
- Custom attributes works but they aren't valid W3C standards. 
- Event though they work, that doesn't mean you may not encounter with any problems.
- One option is you can use something like DTD - Attributes, or avoid this library all together.
- Probably there are better ways to achieve this.


## What is next?
- I can consider change bind= attribute to data-bind= attribute. This would make it more W3C compliant.
- Stores can be initiated with persist option, either with localStorage or sessionStorage.



## License
MIT License

2023 [@Siniradam](https://github.com/siniradam)