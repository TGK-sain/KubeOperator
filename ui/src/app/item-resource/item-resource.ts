export class ItemResource {
  id: string;
  resource_id: string;
  item_id: string;
  resource_type: string;
}

export class ItemResourceDTO extends ItemResource {
  checked: boolean;
  data: object;
}


