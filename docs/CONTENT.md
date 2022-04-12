# Content

Table of contents
- [Content](#content)
  - [Thematic Areas](#thematic-areas)
  - [Datasets](#datasets)
  - [Discoveries](#discoveries)

Delta is divided into Thematic Areas, Datasets, and Discoveries.
Each piece of content is written in [MDX](https://mdxjs.com/docs/what-is-mdx/#what-is-mdx) with configuration frontmatter between a set of `---`.  
A file will look something like:
```yml
---
id: theme1
name: Thematic area 1
---

<Block>
  <Prose>
    ## About theme 1

    Once upon a time there was a content string
  </Prose>
</Block>
```

There are different types of `Block` components that can be used to create engaging content pieces.  
Each `Block` comes with its own rules and needed props, so check the [MDX_BLOCK.md](./MDX_BLOCKS.md) for the full details.

## Thematic Areas

Frontmatter configuration for the Thematic Area
```yaml
id: string
name: string
description: string
media: Media

about:
  title: string
  description: string
```

**id**  
`string`  
Id of this thematic area. Must be unique in the whole application.

**name**  
`string`  
Name of this thematic area. This is used to reference to this thematic area in the application.

**description**  
`string`  
Brief description of this thematic area. This is displayed on cards and the header of a thematic area.

**media**  
`Media`  
Image to identify this resource. See [media.md](./frontmatter/media.md).

**about**  
`object`  
Information for the Thematic area about page.

**about.title**  
`string`  
Title for the about page.

**about.description**  
`string`  
Description for the about page.

## Datasets

Frontmatter configuration for the Dataset
```yaml
---
id: string
name: string
description: string
media: Media

thematics: string[]
featuredOn: string[]

layers: Layer[]
---

<Block>
  <Prose>
    ## This is a Dataset

    Once upon a time there was a content string
  </Prose>
</Block>
```

**id**  
`string`  
Id of this dataset. Must be unique in the whole application

**name**  
`string`  
Name of this dataset. This is used to reference to this dataset in the application.

**description**  
`string`  
Brief description of this dataset. This is displayed on cards and the header of a dataset.

**media**  
`Media`  
Image to identify this resource. See [media.md](./frontmatter/media.md).

**thematics**  
`string[]`  
List of thematic areas ids this discovery belongs to. These values are used by the application to establish a relationship between thematic areas and discoveries.  
Example:
```
thematics:
  - covid-19
  - agriculture
```

**featuredOn**  
`string[]`  
List of thematic areas ids where this discovery is featured. A featured discovery will show up in the thematic area homepage.  
Example:
```
featuredOn:
  - covid-19
  - agriculture
```
![](./media/fm-featured-discovery.png)

**layers**  
`Layer[]`  
List of layers for this dataset. See [layer.md](./frontmatter/layer.md).  
Example:
```yaml
layers:
  - id: layerId
    ... # more props
  - id: anotherLayerId
    ... # more props
```

## Discoveries

Frontmatter configuration for the Discovery
```yaml
---
id: string
name: string
description: string
media: Media
pubDate: string

thematics: string[]
featuredOn: string[]

---

<Block>
  <Prose>
    ## This is a discovery

    Once upon a time there was a content string
  </Prose>
</Block>
```

**id**  
`string`  
Id of this discovery. Must be unique in the whole application.

**name**  
`string`  
Name of this discovery. This is used to reference to this discovery in the application.

**description**  
`string`  
Brief description of this discovery. This is displayed on cards and the header of a discovery.

**media**  
`Media`  
Image to identify this resource. See [media.md](./frontmatter/media.md).

**pubDate**  
`string`  
Publication date for this discovery. Should be in YYYY-MM-DD format.

**thematics**  
`string[]`  
List of thematic areas ids this discovery belongs to. These values are used by the application to establish a relationship between thematic areas and discoveries.  
Example:
```
thematics:
  - covid-19
  - agriculture
```

**featuredOn**  
`string[]`  
List of thematic areas ids where this discovery is featured. A featured discovery will show up in the thematic area homepage.  
Example:
```
featuredOn:
  - covid-19
  - agriculture
```

![](./media/fm-featured-discovery.png)
