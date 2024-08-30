import { PrismicNextLink } from "@prismicio/next"
import React from "react"
import Heading from "./headings"
import { PrismicRichText } from "@prismicio/react"

export default function BaseRichText({ field }) {
    return (
        <PrismicRichText
            field={field}
            components={{
                heading1: ({ children, key }) => <Heading level="1" key={key}>{children}</Heading>,
                heading2: ({ children, key }) => <Heading level="2" key={key}>{children}</Heading>,
                heading3: ({ children, key }) => <Heading level="3" key={key}>{children}</Heading>,
                heading4: ({ children, key }) => <Heading level="4" key={key}>{children}</Heading>,
                heading5: ({ children, key }) => <Heading level="5" key={key}>{children}</Heading>,
                heading6: ({ children, key }) => <Heading level="6" key={key}>{children}</Heading>,
                paragraph: ({ children, key }) => <p key={key}>{children}</p>,
                preformatted: ({ node, key }) => <pre key={key}>{node.text}</pre>,
                strong: ({ children, key }) => <strong key={key}>{children}</strong>,
                em: ({ children, key }) => <em key={key}>{children}</em>,
                listItem: ({ children, key }) => <li key={key}>{children}</li>,
                oListItem: ({ children, key }) => <li key={key}>{children}</li>,
                list: ({ children, key }) => <ul key={key}>{children}</ul>,
                oList: ({ children, key }) => <ol key={key}>{children}</ol>,
                image: ({ node, key }) => {
                    const img = (
                        <img
                            src={node.url}
                            alt={node.alt ?? undefined}
                            data-copyright={node.copyright ? node.copyright : undefined}
                        />
                    )

                    return (
                        <p key={key} className='block-img'>
                            {node.linkTo ? (
                                <PrismicNextLink
                                    linkResolver={args.linkResolver}
                                    internalComponent={args.internalLinkComponent}
                                    externalComponent={args.externalLinkComponent}
                                    field={node.linkTo}
                                >
                                    {img}
                                </PrismicNextLink>
                            ) : (
                                img
                            )}
                        </p>
                    )
                },
                embed: ({ node, key }) => (
                    <div
                        key={key}
                        data-oembed={node.oembed.embed_url}
                        data-oembed-type={node.oembed.type}
                        data-oembed-provider={node.oembed.provider_name}
                        dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
                    />
                ),
                hyperlink: ({ node, children, key }) => (
                    <PrismicNextLink
                        key={key}
                        field={node.data}
                        linkResolver={args.linkResolver}
                        internalComponent={args.internalLinkComponent}
                        externalComponent={args.externalLinkComponent}
                    >
                        {children}
                    </PrismicNextLink>
                ),
                label: ({ node, children, key }) => (
                    <span key={key} className={node.data.label}>
                        {children}
                    </span>
                ),
                span: ({ text, key }) => {
                    const result = []

                    let i = 0
                    for (const line of text.split('\n')) {
                        if (i > 0) {
                            result.push(<br key={`${i}__break`} />)
                        }
                        result.push(
                            <React.Fragment key={`${i}__line`}>{line}</React.Fragment>
                        )
                        i++
                    }

                    return <React.Fragment key={key}>{result}</React.Fragment>
                },
            }}
        />
    )
}