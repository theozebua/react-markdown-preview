# Markdown Guide

This is the basic markdown syntax:
```md
- # Heading 1
- ## Heading 2
- ### Heading 3
- #### Heading 4
- ##### Heading 5
- ###### Heading 6
- This is a paragraph.
- **This is a bold text**.
- _This is an italic text_.
- > This is a blockquote.
```

And it will be rendered like this:

- # Heading 1
- ## Heading 2
- ### Heading 3
- #### Heading 4
- ##### Heading 5
- ###### Heading 6
- This is a paragraph.
- **This is a bold text**.
- _This is an italic text_.
- > This is a blockquote.

## Lists

### Ordered Lists

You can make ordered list using this syntax:

```md
1. First item
2. Second item
   1. Sub item
   2. Sub item
3. Third item
```

And it will be rendered like this:

1. First item
2. Second item
	1. Sub item
    2. Sub item
3. Third item

### Unordered Lists

You can make unordered list using this syntax:

```md
- First item
- Second item
  - Sub item
  - Sub item
- Third item
```

And it will be rendered like this:

- First item
- Second item
	- Sub item
    - Sub item
- Third item

## Code Blocks

### Inline Code

You can make inline code by using backticks ( \` ).

#### Example:

This is a \`\<code\>\</code\>\`.

And it will be rendered like this:

This is a `<code></code>`

### Block Code

You can make block code by using three backticks ( \` ).

#### Example:

\```php
\<?php

declare(strict_types=1);

namespace App;

use Core\MarkdownInterface;
use Core\Markdown as BaseMarkdown;

final class Markdown extends BaseMarkdown implements MarkdownInterface
{
&nbsp;&nbsp;&nbsp;&nbsp;final public function __construct(private string $markdown)
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//
&nbsp;&nbsp;&nbsp;&nbsp;}

&nbsp;&nbsp;&nbsp;&nbsp;final public function render(): string
&nbsp;&nbsp;&nbsp;&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return $this->parse($this->markdown)->toHTML();
&nbsp;&nbsp;&nbsp;&nbsp;}
}

$markdown = new Markdown('# Hello World!');
echo $markdown->render();
\```

And it will be rendered like this:

```php
<?php

declare(strict_types=1);

namespace App;

use Core\MarkdownInterface;
use Core\Markdown as BaseMarkdown;

final class Markdown extends BaseMarkdown implements MarkdownInterface
{
    final public function __construct(private string $markdown)
	{
        //
    }

    final public function render(): string
    {
        return $this->parse($this->markdown)->toHTML();
    }
}

$markdown = new Markdown('# Hello World!');

echo $markdown->render();
```

## Images

You can display images by using this syntax:

```md
![Laravel](https://raw.githubusercontent.com/laravel/art/master/logo-lockup/4%20PNG/3%20RGB/1%20Full%20Color/laravel-logolockup-rgb-red.png)
```

And it will be rendered like this:

![Laravel](https://raw.githubusercontent.com/laravel/art/master/logo-lockup/4%20PNG/3%20RGB/1%20Full%20Color/laravel-logolockup-rgb-red.png)

## Links

You can make links by using this syntax:

```md
- [Laravel Docs](https://laravel.com)
- [My GitHub](https://github.com/theozebua)
```

And it will be rendered like this:

- [Laravel Docs](https://laravel.com)
- [My GitHub](https://github.com/theozebua)

## Tables

You can make tables by using this syntax:

```md
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
```

And it will be rendered like this:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |