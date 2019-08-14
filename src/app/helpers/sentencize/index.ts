export function sentencize(list: string[], junction: 'or' | 'and') {
  return list.reduce(
    (acc, t, i, a) => `${acc}${i < a.length ? ', ' : `, ${junction} `}${t}`,
    ''
  );
}
