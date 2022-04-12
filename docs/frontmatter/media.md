# media
`object`  
Controls the image used to identify this resource. This image will show up in the cards and whenever there’s the need to visually identify the resource.

**src**  
`string | fileSrc`  
The source for the image. Can be an absolute url like `https://example.com/img.png` or a reference to a local file. Whenever using a local file the value must be prefixed with `::file` to instruct the app how to load the file.
Example:
```yaml
media:
  src: ::file ./img-placeholder-4.jpg
```

**alt**  
`string`  
Alternative description for the image.  
Used when it is not possible to view the image, because it failed loading or when a user it using a screen reader. Should be a meaningful description.

**author**  
`object`  
Allows you to give credits to the image author by providing a `name` and an optional `url` to link to. It will normally be displayed as a info icon on top of images.
Example:
```yaml
media:
  author:
    name: Lorem Picsum
    url: https://unsplash.com/
```

![](../media/fm-media-attr.png)