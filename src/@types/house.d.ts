declare namespace House {
  type IHouse = {
    id: string;
    region: string;
    street: string;
    community: string;
    dwelling: string;
    address: string;
    offline: boolean;
    images: string;
    createdAt: string;
    updatedAt: string;
    landLordId: string;
    landLord: User.ILandLord;
    isWhole: boolean;
  };

  type IRoom = {
    id: string;
    price: number;
    images: string;
    content: string;
    isFull: boolean;
    createdAt: string;
    updatedAt: string;
    houseId: string;
    house: IHouse;
    isCollection: boolean;
    roomAndDevices: IRoomAndDevice[];
  };

  type IRoomAndDevice = {
    id: string;
    createdAt: string;
    updatedAt: string;
    roomId: string;
    roomDeviceId: string;
    device: IDevice;
  };

  type IDevice = {
    id: string;
    name: string;
    image: string;
    desc: string;
    remarks: string;
    isDel: boolean;
    createdAt: string;
    updatedAt: string;
  };

  type IMessage = {
    id: string;
    isFromUser: boolean;
    isRead: boolean;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    landLordId: string;
    landLord: User.ILandLord;
    // user: User.IUser;
  };

  type IRoomContract = {
    id: string;
    startTime: string;
    endTime: string;
    payCategory: number;
    price: number;
    remarks: string;
    isChecked: boolean;
    logDate: string;
    createdAt: string;
    updatedAt: string;
    roomId: string;
    userId: string;
    landLordId: string;
    room: IRoom;
    landLord: User.ILandLord;
  };

  type IContractOrder = {
    id: string;
    price: number;
    isPayed: boolean;
    payCategory: number;
    payDate?: any;
    lastPayDate: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
    roomContractId: string;
  };

  type IDateInfo = {
    userId: string;
    roomId: string;
    dateTime: string;
    remarks: string;
  };

  type IDateRoomInfo = {
    id: string;
    dateTime: string;
    remarks: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    roomId: string;
    room: IRoom;
  };
}
