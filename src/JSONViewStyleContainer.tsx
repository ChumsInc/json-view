import styled from '@emotion/styled'

const JSONViewStyleContainer = styled.div`
    .json-view {
        --theme-base00: #002b36;
        --theme-base01: #073642;
        --theme-base02: #586e75;
        --theme-base03: #657b83;
        --theme-base04: #839496;
        --theme-base05: #93a1a1;
        --theme-base06: #eee8d5;
        --theme-base07: #fdf6e3;
        --theme-base08: #dc322f;
        --theme-base09: #cb4b16;
        --theme-base0A: #b58900;
        --theme-base0B: #859900;
        --theme-base0C: #2aa198;
        --theme-base0D: #268bd2;
        --theme-base0E: #6c71c4;
        --theme-base0F: #d33682;

        font-size: 0.7rem;
        line-height: 0.85rem;
        max-height: 90vh;
        overflow: auto;
        font-family: Roboto Mono, monospace;
        white-space: pre-wrap;
        background-color: var(--theme-base07);
        color: var(--theme-base04);
        padding: 1rem;

        &--dark {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }
        @media (prefers-color-scheme: dark) {
            background-color: var(--theme-base00);
            color: var(--theme-base05);
        }

        dl dl {
            margin-left: 2rem;
            margin-bottom: 0;
        }
        &--node {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-items: baseline;
            cursor: text;
        }
        &--number {
            color: var(--theme-base09);
        }
        &--string {
            color: var(--theme-base0B);
            &::before {
                content: '"';
            }
            &::after {
                content: '"';
            }
        }
        &--key {
            color: var(--theme-base0D);
            display: inline-block;
            font-weight: 700;
            margin-right: 0.5rem;
        }
        &--node-key {
            //margin-right: 0.5rem;
            //border: 1px solid var(--theme-base04);
            padding: 0 0.25rem;
            //background-color: var(--theme-base06);
            color: var(--theme-base04);
            transition: all 0.1s ease-in-out;
            border-radius: 0.25rem;
            display: inline-block;
            width: 1rem;
            height: 1rem;
            transform: rotate(0deg);
            transform-origin: center;
            cursor: pointer;
            &.expandable {
                .type--string {
                    ::before {
                        content: '+';
                    }
                    &.open {
                        ::before {
                            content: '-';
                        }
                        transform: rotate(0deg);
                    }
                }
                &::before {
                    content: '▶';
                }
                &.open {
                    transform: rotate(90deg);
                }
            }
        }
        &--collapsed-object {
            &::before {
                content: '{ ';
            }
            &::after {
                content: ' }';
            }
        }

        &--collapsed-array {
            &::before {
                content: '[ ';
            }
            &::after {
                content: ' ]';
            }
        }
        &--collapsed-value {
            &::after {
            }
        }
    }

`
export default JSONViewStyleContainer;
