// Thank you https://github.com/epeli/underscore.string

export function sentencize(list: string[], junction: 'or' | 'and') {
  let a = list.slice(),
    lastMember = a.pop();

  const separator = list.length > 2 ? `, ${junction} ` : ` ${junction} `;

  return a.length ? a.join(', ') + separator + lastMember : lastMember;
}
