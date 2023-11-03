let de = decodeURI;
let enc = encodeURIComponent;

async function post(location, data, json = true) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", '/__/' + location, false);
    if (json) {
        xhr.setRequestHeader("Content-Type", "application/json");
        data = JSON.stringify(data);
    }
    xhr.send(data);
    return xhr;
}

function data() {
    return {
        url: de(location.pathname),
        re: de(location.pathname),
    }
}

export const au = {
    set() {
        return post('au/set', null, 0);
    },
    time() {
        return post('au/time', null, 0, 0);
    },
    out() {
        return post('au/out', data());
    }
}

export const set = {
    meta: async(uid, meta) => {
        let d = data();
        d.meta = meta;
        d.uid = uid;
        return post('set/meta', d);
    },
    apply: async(uid, info) => {
        return post('set/apply', { uid, info });
    },
    applyedit: async(uid, info) => {
        return post('set/apply/edit', { uid, info });
    },
    applydel: async(uid, info) => {
        return post('set/apply/del', { uid, info });
    },
    test: async(uid, info, meta) => {
        return post('set/test', { uid, info, meta });
    }
}

export const cal = {
    day: async(day) => {
        let d = data();
        d.day = day;
        return post('cal/day', d);
    },
    set: async(info) => {
        let d = data();
        d.info = info;
        return post('cal/set', d);
    },
    admin: async(info) => {
        let d = data();
        d.info = info;
        return post('cal/admin', d);
    }
}