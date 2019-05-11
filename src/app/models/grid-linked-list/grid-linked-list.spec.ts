import { GridableGridNodeType, GridLinkedList } from './grid-linked-list';

export class TestGridNode implements GridableGridNodeType {
    constructor(public x: number, public y: number ) {}
}

describe('GridLinkedList', () => {
    describe('add', () => {
        let subject: GridLinkedList<TestGridNode>;
        let initialNodeLinks = null;

        beforeEach(() => {
            subject = new GridLinkedList<TestGridNode>((a, b) => a.x === b.x && a.y === b.y);

            initialNodeLinks = subject.add(new TestGridNode(3, 3)); // add an initial link
        });

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

        it('should link newly added nodes to its neighbour\'s links', () => {
            
        });
    });
});