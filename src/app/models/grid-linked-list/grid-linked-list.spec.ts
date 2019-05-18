import { GridableGridNodeType, GridLinkedList } from './grid-linked-list';

export class TestGridNode implements GridableGridNodeType {
    constructor(public x: number, public y: number ) {}
}

describe('GridLinkedList', () => {
    let subject: GridLinkedList<TestGridNode>;
    let initialNodeLinks = null;

    beforeEach(() => {
            subject = new GridLinkedList<TestGridNode>();

            initialNodeLinks = subject.add(new TestGridNode(3, 3)); // add an initial link
        });

    describe('add', () => {
        it('should allow to add an initial node without links', () => {
            expect(initialNodeLinks.length).toBe(4);
            expect(initialNodeLinks).toContain(jasmine.objectContaining({ x: 4, y: 3}));
            expect(initialNodeLinks).toContain(jasmine.objectContaining({ x: 3, y: 4}));
            expect(initialNodeLinks).toContain(jasmine.objectContaining({ x: 3, y: 2}));
            expect(initialNodeLinks).toContain(jasmine.objectContaining({ x: 2, y: 3}));
        });

        it('should throw error if the node already exist', () => {
            expect(() => { subject.add(new TestGridNode(3, 3)); }).toThrowError();
        });

        it('should throw error if there are no nodes in the grid that are linkable', () => {
            expect(() => { subject.add(new TestGridNode(5, 2)); }).toThrowError();
        });

        it('should add when it is a linkable nodes', () => {
            const newLinks = subject.add(new TestGridNode(2, 3));
            expect(newLinks.length).toBe(3);
            expect(newLinks).toContain(jasmine.objectContaining({ x: 2, y: 4}));
            expect(newLinks).toContain(jasmine.objectContaining({ x: 2, y: 2}));
            expect(newLinks).toContain(jasmine.objectContaining({ x: 1, y: 3}));
        });
    });

    describe('links', () => {
        it('should link only its neighbours', () => {
            subject.add(new TestGridNode(2, 3));
            subject.add(new TestGridNode(4, 3));
            subject.add(new TestGridNode(2, 2));
            subject.add(new TestGridNode(3, 2));
            subject.add(new TestGridNode(1, 2));

            const result = subject.get({ x: 3, y: 3 });
            expect(result.links.length).toBe(3);
            expect(result.links.some(l => l.equals(new TestGridNode(4, 3)))).toBe(true);
            expect(result.links.some(l => l.equals(new TestGridNode(2, 2)))).toBe(false);

            const testNode32 = result.links.find(l => l.equals(new TestGridNode(3, 2)));
            expect(testNode32.links.length).toBe(2);
            expect(testNode32.links.some(l => l.equals(new TestGridNode(2, 2)))).toBe(true);
            expect(testNode32.links.some(l => l.equals(new TestGridNode(3, 3)))).toBe(true);
            expect(testNode32.links.some(l => l.equals(new TestGridNode(2, 3)))).toBe(false);

            const testNode12 = testNode32.links
                .find(l => l.equals(new TestGridNode(2, 2)))
                .links
                .find(l => l.equals(new TestGridNode(1, 2)));
            expect(testNode12.links.length).toBe(1);
            expect(testNode12.links.some(l => l.equals(new TestGridNode(2, 2)))).toBe(true);
        });
    });

    describe('get', () => {
        it('should return undefined if node does not exist', () => {
            const result = subject.get({x: 4, y: 3});
            expect(result).toBeUndefined();
        }) ;
    });
});
