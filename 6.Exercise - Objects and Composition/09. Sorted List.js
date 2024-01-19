function createSortedList(){

    
    let result = {
        add: function(element){
            if(typeof(element) !== 'number' || isNaN(element)){
                return;
            }
            this._sortList.push(Number(element));
            this._sortList.sort(this._sort);
            this.size = this._sortList.length;
        },
        remove: function(idx){
            if(idx < 0 || idx >= this.size){
                return;
            }
            this._sortList.splice(idx, 1);
            this._sortList.sort(this._sort);
            this.size = this._sortList.length;
        },
        get: function(idx){
            if (idx < 0 || idx >= this.size){
                return;
            }
            return this._sortList[idx];
        },
        size: 0,
        _sort: function(a, b){
            return a - b;
        },
        _sortList: []

    };

    return result;
}

let list = createSortedList();

list.add(5);

list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));