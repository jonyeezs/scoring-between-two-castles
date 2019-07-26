import { RoomDefinition } from './room.type';

export const rooms: RoomDefinition[] = [
	{
		"name": "afternoon tea room",
		"type": "food",
		"hanging": "torch",
		"rule": "2 per sleeping a / b"
	},
	{
		"name": "archery range",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per corridor"
	},
	{
		"name": "armory",
		"type": "basement",
		"hanging": "painting",
		"rule": "2 per throne all above and below"
	},
	{
		"name": "aviary",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per utility"
	},
	{
		"name": "bakery",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per utility l / r"
	},
	{
		"name": "between two rooms",
		"type": "corridor",
		"hanging": "torch",
		"rule": "1 per torch around"
	},
	{
		"name": "biegarten",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per throne"
	},
	{
		"name": "blanket room",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "brandy room",
		"type": "food",
		"hanging": "painting",
		"rule": "2 per throne a / b"
	},
	{
		"name": "breakfast nook",
		"type": "food",
		"hanging": "painting",
		"rule": "2 per corridor a / b"
	},
	{
		"name": "brewery",
		"type": "food",
		"hanging": "mirror",
		"rule": "2 per living a / b"
	},
	{
		"name": "broom closet",
		"type": "utility",
		"rule": "1 per connected sleeping"
	},
	{
		"name": "bunk room",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "butterfly garden",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per corridor"
	},
	{
		"name": "buttery",
		"type": "food",
		"hanging": "torch",
		"rule": "2 per corridor a / b"
	},
	{
		"name": "cape room",
		"type": "living",
		"hanging": "painting",
		"rule": "2 per basement below l / b / r"
	},
	{
		"name": "chicken coop",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per utility"
	},
	{
		"name": "children's room",
		"type": "sleeping",
		"hanging": "swords",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "china room",
		"type": "food",
		"hanging": "mirror",
		"rule": "2 per throne l / r"
	},
	{
		"name": "chocolate room",
		"type": "food",
		"rule": "painting } 2 per downstairs b / b"
	},
	{
		"name": "coat room",
		"type": "utility",
		"hanging": "mirror",
		"rule": "1 per connected outdoor"
	},
	{
		"name": "crepery",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per sleeping a / b"
	},
	{
		"name": "crown storage",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected throne"
	},
	{
		"name": "crypt",
		"type": "downstairs",
		"hanging": "painting",
		"rule": "1 per downstairs all above and below"
	},
	{
		"name": "cutlery room",
		"type": "food",
		"hanging": "painting",
		"rule": "2 per outdoor l / r"
	},
	{
		"name": "dead end",
		"type": "corridor",
		"hanging": "swords",
		"rule": "1 per swords around"
	},
	{
		"name": "dining room",
		"type": "food",
		"hanging": "painting",
		"rule": "2 per food a / b"
	},
	{
		"name": "drawing room",
		"type": "living",
		"hanging": "painting",
		"rule": "1 per utility around "
	},
	{
		"name": "dreaming room",
		"type": "sleeping",
		"hanging": "painting",
		"rule": " 4 if all colors // 1"
	},
	{
		"name": "dressing room",
		"type": "sleeping",
		"hanging": "torch",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "dumbwaiter",
		"type": "utility",
		"hanging": "swords",
		"rule": "1 per connected food"
	},
	{
		"name": "dungeon",
		"type": "downstairs",
		"hanging": "mirror",
		"rule": "1 per corridor all above and below"
	},
	{
		"name": "echo chamber",
		"type": "corridor",
		"hanging": "torch",
		"rule": "1 per torch around"
	},
	{
		"name": "escape room",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "fireplace",
		"type": "living",
		"hanging": "mirror",
		"rule": "1 per food around"
	},
	{
		"name": "firewood storage",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per living"
	},
	{
		"name": "fish pond",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per food"
	},
	{
		"name": "flower garden",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per throne"
	},
	{
		"name": "fountain",
		"type": "outdoor throne",
		"hanging": "none",
		"rule": "5"
	},
	{
		"name": "french gazebo",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per throne"
	},
	{
		"name": "fungus room",
		"type": "downstairs",
		"hanging": "mirror",
		"rule": "1 per food all above"
	},
	{
		"name": "gallery",
		"type": "living",
		"hanging": "swords",
		"rule": "1 per utility around"
	},
	{
		"name": "game storage",
		"type": "utility",
		"hanging": "swords",
		"rule": "1 per connected living"
	},
	{
		"name": "glassmaking room",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected utility"
	},
	{
		"name": "grand balcony",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per sleeping"
	},
	{
		"name": "grand foyer",
		"type": "outdoor throne",
		"hanging": "none",
		"rule": "1 per around"
	},
	{
		"name": "great hall",
		"type": "corridor",
		"hanging": "swords",
		"rule": "1 per swords around"
	},
	{
		"name": "guardhouse",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per downstairs"
	},
	{
		"name": "guest room",
		"type": "sleeping",
		"hanging": "swords",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "gunpowder room",
		"type": "downstairs",
		"hanging": "painting",
		"rule": "1 per corridor all above and below"
	},
	{
		"name": "hall of creaking floors",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "hall of doors",
		"type": "corridor",
		"hanging": "mirror",
		"rule": "1 per mirror around"
	},
	{
		"name": "hall of ever-closing walls",
		"type": "corridor",
		"hanging": "swords",
		"rule": "1 per sword around"
	},
	{
		"name": "hall of ghosts",
		"type": "corridor",
		"hanging": "mirror",
		"rule": "1 per mirror around"
	},
	{
		"name": "hall of knights",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "hall of mirrors",
		"type": "corridor",
		"hanging": "mirror",
		"rule": "1 per mirror around"
	},
	{
		"name": "hall of paintings",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "hall of portraits",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "hall of puzzled floor",
		"type": "corridor",
		"hanging": "torch",
		"rule": "1 per torch around"
	},
	{
		"name": "hall of sculptures",
		"type": "corridor",
		"hanging": "mirror",
		"rule": "1 per mirror around"
	},
	{
		"name": "hall of windows",
		"type": "corridor",
		"hanging": "painting",
		"rule": "1 per painting around"
	},
	{
		"name": "harp room",
		"type": "living",
		"hanging": "mirror",
		"rule": "1 per utility around"
	},
	{
		"name": "hat room",
		"type": "living",
		"hanging": "painting",
		"rule": "1 per corridor around"
	},
	{
		"name": "hibernation chamber",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "hidden lair",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "1 per utility all above"
	},
	{
		"name": "hidden passage",
		"type": "corridor",
		"hanging": "torch",
		"rule": "1 per torch around"
	},
	{
		"name": "hidden terrace",
		"type": "downstairs",
		"hanging": "swords",
		"rule": "1 per corridor all above and below"
	},
	{
		"name": "ice house",
		"type": "food",
		"hanging": "torch",
		"rule": "2 per living l/r"
	},
	{
		"name": "in-law suite",
		"type": "sleeping",
		"hanging": "swords",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "jewel room",
		"type": "downstairs",
		"hanging": "swords",
		"rule": "1 per living all above"
	},
	{
		"name": "kennel",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected sleeping"
	},
	{
		"name": "key room ",
		"type": "utility",
		"hanging": "mirror",
		"rule": "1 per connected corridor"
	},
	{
		"name": "king's chamber",
		"type": "sleeping",
		"hanging": "torch",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "kitchen",
		"type": "food",
		"hanging": "torch",
		"rule": "2 per food a / b"
	},
	{
		"name": "kittery",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected corridor"
	},
	{
		"name": "knight room",
		"type": "downstairs",
		"hanging": "mirror",
		"rule": "2 per throne all above and below"
	},
	{
		"name": "laboratory",
		"type": "downstairs",
		"hanging": "swords",
		"rule": "2 per utility above"
	},
	{
		"name": "laundry room",
		"type": "utility",
		"hanging": "torch",
		"rule": "1 per connected food"
	},
	{
		"name": "library",
		"type": "living",
		"hanging": "swords",
		"rule": "1 per throne around"
	},
	{
		"name": "lockdown room",
		"type": "corridor",
		"hanging": "swords",
		"rule": "1 per swords around"
	},
	{
		"name": "map room",
		"type": "living",
		"hanging": "mirror",
		"rule": "1 per sleeping all around"
	},
	{
		"name": "meat locker",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per outdoor l / r"
	},
	{
		"name": "meditation room",
		"type": "living",
		"hanging": "swords",
		"rule": "2 per outdoor around except below"
	},
	{
		"name": "midnight room",
		"type": "sleeping",
		"hanging": "swords",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "mold room",
		"type": "downstairs",
		"hanging": "swords",
		"rule": "1 per food all above"
	},
	{
		"name": "morning tea room",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per living a / b"
	},
	{
		"name": "mud room",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected outdoor"
	},
	{
		"name": "nap room",
		"type": "sleeping",
		"hanging": "torch",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "nursery",
		"type": "sleeping",
		"hanging": "torch",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "observatory",
		"type": "living",
		"hanging": "torch",
		"rule": "1 per living all around"
	},
	{
		"name": "pacing hall",
		"type": "corridor",
		"hanging": "mirror",
		"rule": "1 per mirror around"
	},
	{
		"name": "padded room",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "1 per living all above"
	},
	{
		"name": "panic room",
		"type": "utility",
		"hanging": "swords",
		"rule": "1 per connected throne"
	},
	{
		"name": "pantry",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per corridor l / r"
	},
	{
		"name": "parlor",
		"type": "living",
		"hanging": "torch",
		"rule": "1 per food around"
	},
	{
		"name": "pillow room",
		"type": "sleeping",
		"hanging": "torch",
		"rule": " 4 if all colors // 1"
	},
	{
		"name": "pit of despair",
		"type": "downstairs",
		"hanging": "mirror",
		"rule": "1 per downstairs all above and below"
	},
	{
		"name": "powder room",
		"type": "utility",
		"hanging": "mirror",
		"rule": "1 per connected food"
	},
	{
		"name": "prince's chambers",
		"type": "sleeping",
		"hanging": "mirror",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "princess chambers",
		"type": "sleeping",
		"hanging": "mirror",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "promenade",
		"type": "corridor",
		"hanging": "swords",
		"rule": "1 per swords around"
	},
	{
		"name": "pumpkin garden",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per food"
	},
	{
		"name": "puppy room",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "purgatory",
		"type": "corridor",
		"hanging": "torch",
		"rule": "1 per torch around"
	},
	{
		"name": "queen's chambers",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "5 if all colors // 1"
	},
	{
		"name": "quiet room",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "1 per sleeping all above"
	},
	{
		"name": "rabbit room",
		"type": "sleeping",
		"hanging": "swords",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "reading room",
		"type": "living",
		"hanging": "torch",
		"rule": "2 per outdoor around except below"
	},
	{
		"name": "reception room",
		"type": "living",
		"hanging": "torch",
		"rule": "1 per corridor around"
	},
	{
		"name": "repair shop",
		"type": "utility",
		"hanging": "swords",
		"rule": "1 per connected utility"
	},
	{
		"name": "rug room",
		"type": "living",
		"hanging": "painting",
		"rule": "1 per living around"
	},
	{
		"name": "salon",
		"type": "living",
		"hanging": "painting",
		"rule": "1 per sleeping around"
	},
	{
		"name": "sauerkraut room",
		"type": "food",
		"hanging": "mirror",
		"rule": "2 per food l/r"
	},
	{
		"name": "sauna",
		"type": "utility",
		"hanging": "swords",
		"rule": "1 per connected sleeping"
	},
	{
		"name": "schoolhouse",
		"type": "utility",
		"hanging": "torch",
		"rule": "1 per connected corridor"
	},
	{
		"name": "scullery",
		"type": "food",
		"hanging": "torch",
		"rule": "2 per utility a / b"
	},
	{
		"name": "scythe room",
		"type": "utility",
		"hanging": "painting",
		"rule": "1 per connected downstairs"
	},
	{
		"name": "servant's quaters",
		"type": "sleeping",
		"hanging": "painting",
		"rule": "4 if all colors // 1 "
	},
	{
		"name": "shield room",
		"type": "utility",
		"hanging": "torch",
		"rule": "1 per connected downstairs"
	},
	{
		"name": "siege food storage",
		"type": "food",
		"hanging": "swords",
		"rule": "2 per throne a / b"
	},
	{
		"name": "sitting room",
		"type": "living",
		"hanging": "mirror",
		"rule": "2 per outdoor around except below"
	},
	{
		"name": "snake pit",
		"type": "downstairs",
		"hanging": "mirror",
		"rule": "1 per living all above"
	},
	{
		"name": "solar",
		"type": "sleeping",
		"hanging": "mirror",
		"rule": " 4 if all colors // 1"
	},
	{
		"name": "spice room",
		"type": "food",
		"hanging": "mirror",
		"rule": "2 per downstairs 2 below"
	},
	{
		"name": "spy room",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "1 per downstairs all above and below"
	},
	{
		"name": "stables",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per downstairs"
	},
	{
		"name": "study",
		"type": "living",
		"hanging": "mirror",
		"rule": "1 per throne around"
	},
	{
		"name": "sty",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per downstairs"
	},
	{
		"name": "subterranean tunnel",
		"type": "downstairs",
		"hanging": "painting",
		"rule": "1 per utility all above"
	},
	{
		"name": "swimming hole",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per living"
	},
	{
		"name": "tapestry room",
		"type": "living",
		"hanging": "swords",
		"rule": "1 per sleeping around"
	},
	{
		"name": "tasso room",
		"type": "sleeping",
		"hanging": "mirror",
		"rule": "4 if all colors // 1"
	},
	{
		"name": "taxidermy showroom",
		"type": "living",
		"hanging": "torch",
		"rule": "2 per downstairs below l / b / r"
	},
	{
		"name": "terrace",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per sleeping"
	},
	{
		"name": "the hole",
		"type": "downstairs",
		"hanging": "painting",
		"rule": "1 per sleeping all above"
	},
	{
		"name": "tool room",
		"type": "utility",
		"hanging": "mirror",
		"rule": "1 per connected utility"
	},
	{
		"name": "torch storage",
		"type": "utility",
		"hanging": "torch",
		"rule": "1 per connected living"
	},
	{
		"name": "tower",
		"type": "outdoor throne",
		"hanging": "none",
		"rule": "1 per all below"
	},
	{
		"name": "treasure room",
		"type": "downstairs",
		"hanging": "swords",
		"rule": "1 per sleeping all above"
	},
	{
		"name": "turtle pond",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per sleeping"
	},
	{
		"name": "vegetable garden",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per food"
	},
	{
		"name": "venus grotto",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "2 per throne all above and below"
	},
	{
		"name": "vestibule",
		"type": "living",
		"hanging": "swords",
		"rule": "1 per food around"
	},
	{
		"name": "vineyard",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per living"
	},
	{
		"name": "waiting room",
		"type": "living",
		"hanging": "mirror",
		"rule": "1 per corridor around"
	},
	{
		"name": "walking path",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per corridor"
	},
	{
		"name": "washroom",
		"type": "utility",
		"hanging": "mirror",
		"rule": "1 per connected living"
	},
	{
		"name": "wine cellar",
		"type": "downstairs",
		"hanging": "torch",
		"rule": "1 per food all above"
	},
	{
		"name": "wine room",
		"type": "food",
		"hanging": "mirror",
		"rule": "2 per sleeping a / b"
	},
	{
		"name": "winter garden",
		"type": "outdoor",
		"hanging": "none",
		"rule": "1 per utility"
	}
]