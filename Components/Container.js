class PrescriptionsInfos {
    static infos = "";

    static set(infos) {
        this.infos = infos
    }

    static get() {
        return (this.infos)
    }
}

export default PrescriptionsInfos;